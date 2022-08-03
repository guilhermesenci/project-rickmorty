import react from 'react'

function SelectMenu({ value }) {
    return (
        <>
            <select>
                <option value={value}>{value}</option>
            </select>
        </>
    )
}

export default SelectMenu