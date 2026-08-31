export function SectionDivider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22M12 2C12 2 16 6 16 12C16 18 12 22 12 22"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
