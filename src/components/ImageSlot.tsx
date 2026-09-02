type ImageSlotProps = {
  label: string;
  ratio?: string;
  className?: string;
};

/**
 * Placeholder para las imágenes que se subirán después.
 * Reemplazar por <img src={...} alt={...} /> cuando estén disponibles.
 */
export function ImageSlot({ label, ratio = "4 / 3", className = "" }: ImageSlotProps) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-2xl border-2 border-dashed border-border bg-surface-strong/60 p-6 text-center ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="space-y-1">
        <div className="text-2xl opacity-60">🖼</div>
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Imagen
        </p>
        <p className="mx-auto max-w-[22ch] text-xs text-muted-foreground/80">{label}</p>
      </div>
    </div>
  );
}
