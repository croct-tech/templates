import { ScriptCopyBtn } from "?/**/*/magicui/script-copy-btn.tsx"

interface Command {
  tabName: string;
  command: string
}

interface CopyCommandBlockProps {
  codeLanguage: string;
  commands: Command[],
  showMultiplePackageOptions?: boolean;
}

export function CopyCommandBlock({codeLanguage, commands, showMultiplePackageOptions}: CopyCommandBlockProps) {
  return (
    <ScriptCopyBtn
      codeLanguage={codeLanguage}
      showMultiplePackageOptions={showMultiplePackageOptions}
      lightTheme="nord"
      darkTheme="vitesse-dark"
      commandMap={Object.fromEntries(commands.map(command => [command.tabName, command.command]))}
    />
  );
}
