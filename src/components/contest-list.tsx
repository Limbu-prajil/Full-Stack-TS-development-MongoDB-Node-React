import {useState, useEffect} from "react"

import ContestPreview from "./contest-preview"
import {fetchContestList} from "../api-client"
import Header from "./header"

const ContestList = ({initialContests, onContestClick}) => {
    const [contests, setContests] = useState(initialContests ?? [])

    useEffect(() => {
        if (!initialContests) {
            fetchContestList().then((contests) => {   
                setContests(contests)
             })
        }
    }, [initialContests])

    return (
        <>
            <Header message="Naming contests" />
            <div className="contest-list">
                {contests.map((contest) => {
                    return <ContestPreview key={contest.id} 
                    contest={contest} 
                    onClick={onContestClick} />
                })}
            </div>
        </>
    )
}

export default ContestList
