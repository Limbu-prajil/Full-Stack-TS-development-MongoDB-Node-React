const NewName = ({ handleNewNameSubmit }) => {
    return (
        <>
            <div className="title">Propose a New Name</div>
            <div className="body">
                <form onSubmit={handleNewNameSubmit}>
                    <input type="text" name="newName" placeholder="New Name Here ..." />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default NewName

