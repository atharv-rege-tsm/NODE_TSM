import { useState } from "react";

export default function DynamicForm() {
    const [type, setType] = useState("Solo");
    const [size, setSize] = useState(1);


    return (
        <form action="" className={`${theme === 'theme' ? 'bg-green' : 'bg-red'}`}>
            <label htmlFor="">Team Type</label> <br />
            <select name="" id="" onChange={(e) => setType(e.target.value)}>
                <option value="Solo">Solo</option>
                <option value="Team" >Team</option>
            </select>
            {type === "Team" && (
                <>
                    <br />
                    <label htmlFor="">team members size</label> <br />
                    <input type="number" min={2} max={4} className="border" value={size} onChange={(e) => setSize(e.target.value)} />
                </>
            )}

            {type === "Team" &&
                Array.from({ length: size }).map((_, i) => (
                    <input
                        key={i}
                        type="text"
                        placeholder={`Input ${i + 1}`}
                        className="border border-black p-2 block mb-2"
                    />
                ))

            }
            <br />
            {/* <input className="border border-black " type="text" onChange={(e) => setType(e.target.value)} placeholder="" /> */}
        </form>
    );
}
