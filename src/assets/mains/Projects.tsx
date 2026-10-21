import Calculator from "../components/Calculator.tsx";


export default function Projects() {
    return(
        <>
            <title>Projects | Youn's Resume</title>
            <h3><strong>Projects</strong></h3>
            <p>
                <strong>C IMAGE PROCESSING & BARCODE GENERATOR</strong>
            </p>
            <ul>
                <li>Implemented image transformation logic in C using structs, pointer arithmetic, and row-major pixel indexing.</li>
                <li>Built barcode generation logic with quiet zones, start/end patterns, and vertical stripe rendering.</li>
            </ul>
            <p>
                <strong>SERIALIZATION LIBRARY IN C</strong>
            </p>
            <ul>
                <li>Wrote serialization and deserialization functions for integers, floats, and strings using buffers and memory copying.</li>
                <li>Managed dynamic buffer growth with realloc and manually tracked byte offsets for serialized data.</li>
            </ul>
            <Calculator />
        </>
    )
}