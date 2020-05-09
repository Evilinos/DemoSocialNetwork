import styles from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return <div className={styles.paggination}>
        {
            portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)} }>Previous</button>
        }
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span onClick={() => props.onPageChanged(p)}
                             className={props.currentPage === p && styles.selectedPage}>{p}</span>
            })
        }
        {
            portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)} }>Next</button>
        }
    </div>
}

export default Paginator