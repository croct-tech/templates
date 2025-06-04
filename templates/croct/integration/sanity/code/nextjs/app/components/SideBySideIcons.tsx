export type SideBySideIconsProps = {
  logos: string[]
}

export default function SideBySideIcons({logos}: SideBySideIconsProps) {
    return (
        <div className="isolate flex -space-x-5 hover:space-x-10 transition-all duration-300 group">
            {logos.map((logo, index) => (
                <div
                    key={index}
                    style={{zIndex: 10 + logos.length - index}}
                    className="aspect-square w-32 h-32 relative inline-block border-white border-4 bg-white rounded-full group-hover:scale-110 transition-all duration-300"
                >
                    <img className="w-full h-full" src={logo} alt="Logo" />
                    {index < logos.length - 1 && (
                        <div className="text-black text-4xl scale-50 font-bold absolute top-1/2 -right-7 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-150 ease-in-out">
                            +
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
