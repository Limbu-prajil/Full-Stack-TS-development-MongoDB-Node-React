const ProposedNames = ({ contest }) => {
    return (
        <>
            <div className="title">Proposed Names</div>
            <div className="body">
                {contest.names?.length > 0 ? (
                    <div className="list">
                        {contest.names.map((proposedName) => (
                            <div className="item" key={proposedName.id}>{proposedName.name}</div>
                        ))}
                    </div>
                    ) : (
                    <div>No names proposed yet</div>
                )}
            </div>
        </>
    )
}

export default ProposedNames
