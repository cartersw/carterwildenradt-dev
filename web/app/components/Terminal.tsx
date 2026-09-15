"use client";

import { useTerminalScript } from "../hooks/useTerminalScript";
import type { TerminalCommand, TerminalLine } from "../lib/terminal";

type TerminalProps = {
  commands: TerminalCommand[];
};

export function Terminal({ commands }: TerminalProps) {
  const { completed, directory, typed } = useTerminalScript(commands);

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-800 bg-black text-left text-white shadow-lg shadow-black/15">
      <TerminalTitleBar />

      <div className="whitespace-pre-wrap wrap-anywhere px-4 py-3 text-sm md:px-6 md:py-4 md:text-lg">
        {completed.map((command, index) => (
          <div key={index}>
            <Prompt directory={command.directory} />
            {command.input}
            {command.output && (
              <TerminalOutput lines={command.output} />
            )}
          </div>
        ))}

        <div>
          <Prompt directory={directory} />
          {typed}
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
}

function TerminalTitleBar() {
  return (
    <div className="flex h-11 items-center gap-3 border-b border-white/10 bg-neutral-900 px-4 text-sm md:px-6">
      <span aria-hidden="true" className="text-neutral-400">
        &gt;_
      </span>
      <span className="tracking-wide text-neutral-200">PortfolioShell</span>
    </div>
  );
}

function Prompt({ directory }: { directory: string }) {
  return <span>{directory}&gt;</span>;
}

function TerminalOutput({ lines }: { lines: TerminalLine[] }) {
  return (
    <div>
      {lines.map((line, index) => (
        <div key={index}>
          {"text" in line ? line.text : <EntryLine {...line} />}
        </div>
      ))}
    </div>
  );
}

function EntryLine({
  label,
  detail,
  href,
  link = "label",
}: {
  label: string;
  detail?: string;
  href?: string;
  link?: "label" | "detail";
}) {
  const linkClass = "underline hover:opacity-70";
  const external = href && !href.startsWith("mailto:");

  if (href && link === "detail" && detail) {
    return (
      <>
        {label}
        {"     "}
        <a
          href={href}
          {...(external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          className={linkClass}
        >
          {detail}
        </a>
      </>
    );
  }

  if (href) {
    return detail ? (
      <>
        <a
          href={href}
          {...(external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          className={linkClass}
        >
          {label}
        </a>
        {`  -  ${detail}`}
      </>
    ) : (
      <a
        href={href}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className={linkClass}
      >
        {label}
      </a>
    );
  }

  return (
    <>
      {label}
      {detail && `     ${detail}`}
    </>
  );
}
