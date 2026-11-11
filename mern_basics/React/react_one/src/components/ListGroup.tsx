import { Fragment } from "react";

function ListGroup() {
    return (
        <>
            <section>
                <h1>First List Type</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </section>
            <section>
                <h1>Second List Type</h1>
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Content for list item
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Content for list item
                        </div>
                        {/* <span className="badge theme-primary">14</span> */}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Content for list item
                        </div>
                        {/* <span className="badge theme-primary">14</span> */}
                    </li>
                </ol>
            </section>
        </>
    );
}

export default ListGroup;