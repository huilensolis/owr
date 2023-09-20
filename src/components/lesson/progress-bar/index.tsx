export function ProgressBar({
  actualValue,
  maxValue
}: {
  actualValue: number
  maxValue: number
}) {
  return (
    <progress
      value={actualValue}
      max={maxValue}
      className="h-3 w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 dark:[&::-webkit-progress-bar]:bg-slate-700 [&::-webkit-progress-value]:bg-cm-green [&::-moz-progress-bar]:bg-cm-green transition-all delay-300"
    />
  )
}
