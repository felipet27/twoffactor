"use client";

export function TallerHablemosBtn({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("open-contact"))}
      style={{
        background: "#8C5524",
        color: "#FFFFFF",
        border: 0,
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: 600,
        fontSize: 16,
        padding: "0 22px",
        minHeight: 48,
        borderRadius: 8,
        display: "inline-flex",
        alignItems: "center",
        ...style,
      }}
    >
      Hablemos
    </button>
  );
}
