export default function Sidepattern() {
    const dots = Array(20).fill(0); // Creates an array of 20 elements

    return (
        <div className="flex w-12 h-72 justify-between">
            {[...Array(3)].map((_, colIndex) => (
                <div key={colIndex} className="flex flex-col justify-evenly h-full">
                    {dots.map((_, i) => (
                        <div key={i} className="bg-[#754ef9] w-1 h-1 rounded-full"></div>
                    ))}
                </div>
            ))}
        </div>
    );
}
