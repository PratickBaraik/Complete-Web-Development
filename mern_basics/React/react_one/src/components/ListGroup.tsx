import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {


    // let headings = [
    //     'First Heading',
    //     'Second Heading',
    //     'Third Heading',
    //     'Forth Heading',
    //     'Fifth Heading'
    // ];

    // let descriptions = [
    //     'This is first description.',
    //     'This is second description.',
    //     'This is third description.',
    //     'This is forth description.',
    //     'This is fifth description.'
    // ];

    const [selectedIndexFirst, setSelectedIndexFirst] = useState(-1);
    // const [selectedIndexSecond, setSelectedIndexSecond] = useState(-1);


    // items = [];
    // headings = [];
    // descriptions = [];

    if (items.length === 0) {
        return <>
            <h1>List Group</h1>
            <p>No items found.</p>
        </>;
    } else {
        return (
            <>
                <section>
                    <h1>{heading}</h1>
                    <ul className="list-group list-group-flush">
                        {items.map((item, index) =>
                            <li
                                className={selectedIndexFirst === index ? 'list-group-item active' : 'list-group-item'}
                                key={item}
                                onClick={() => {
                                    setSelectedIndexFirst(index);
                                    onSelectItem(item);
                                }}
                            >
                                {item}
                            </li>
                        )}
                    </ul>
                </section>
                {/* <section>
                    <h1>Second List Type</h1>
                    <dl className="list-group list-group-numbered">
                        {headings.map((heading, index) => (
                            <li
                                onClick={() => { setSelectedIndexSecond(index); }}
                                className={selectedIndexSecond === index ? 'list-group-item active' : 'list-group-item'}
                                key={heading}
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{heading}</div>
                                    {descriptions[index]}
                                </div>
                            </li>
                        ))}
                    </dl>
                </section> */}
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