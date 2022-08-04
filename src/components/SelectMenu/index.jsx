import { useState, useEffect } from 'react'
import styles from './SelectMenu.module.css'

function SelectMenu({ options, selectName, placeholder, onChange }) {
    const [optionsValue, setOptionsValue] = useState()

    useEffect(() => {
        if (options) {
            setOptionsValue(options)
        }
    }, [options])

    return (
        <div>
            <select className={styles.inputSelect} name={selectName} onChange={onChange}>
                <option value="">
                    {placeholder}
                </option>
                {optionsValue?.map(item => {
                    return (
                        <option
                            value={item}
                            key={item}
                        >
                            {item}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectMenu