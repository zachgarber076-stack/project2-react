function IndividualComment({value}) {
    console.log(value);
    
    

    return (
        <div className="border-b">
            <p>Name: {value.name}</p>
            <p>"{value.body}"</p>
        </div>
    );
}

export default IndividualComment;