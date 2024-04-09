
export const Input=({label="Weight (kg)",placeholder="Enter weight value" ,onchange,id})=>{
    return (
        <div className="flex flex-col gap-1">
            <div className="font-semibold">{label}</div>
            <input onChange={onchange} id={id} type="number" placeholder={placeholder} className="h-9 pl-2 rounded border-2 border-black"/>
        </div>
    )
}