import react from 'react'

function SelectMenu({ label, value }) {
    return (
        <>
            <label for={label} />
            <select>
                <option value={value}>{value}</option>
            </select>
        </>
    )
}

export default SelectMenu