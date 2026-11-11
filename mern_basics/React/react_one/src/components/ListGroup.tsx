function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    let headings = [
        'First Heading',
        'Second Heading',
        'Third Heading',
        'Forth Heading',
        'Fifth Heading'
    ];

    let descriptions = [
        'This is first description.',
        'This is second description.',
        'This is third description.',
        'This is forth description.',
        'This is fifth description.'
    ];

    // items = [];
    // headings = [];
    // descriptions = [];

    if (items.length === 0 && headings.length === 0 && descriptions.length === 0) {
        return <>
            <h1>List Group</h1>
            <p>No items found.</p>
        </>;
    } else {
        return (
            <>
                <section>
                    <h1>First List Type</h1>
                    <ul className="list-group list-group-flush">
                        {items.map((item, index) => <li onClick={(event) => console.log(event)} className="list-group-item" key={item}>{item}</li>)}
                    </ul>
                </section>
                <section>
                    <h1>Second List Type</h1>
                    <ol className="list-group list-group-numbered">
                        {headings.map((heading, index) => (
                            <li onClick={() => console.log(index + 1, heading, descriptions[index])} className="list-group-item d-flex align-items-start" key={heading}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{heading}</div>
                                    {descriptions[index]}
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>
            </>
        );
    }
}

export default ListGroup;

// two types of true/false rendering
{/* 
    1. ternary operator
    condition ? true statement : false statement
    
    2. using && operator
    condition && <true statement>

    e.g., true_condition && 'result'
    output: result

    false_condition && 'result'
    output: false
*/}