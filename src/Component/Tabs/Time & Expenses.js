import React,{useState} from "react";
import { Row, Col, Card, CardHeader, CardBody, Table, Button } from "reactstrap";

const table = [{
    name: "Billing Worksheet",
    date: "Pending",
    from: "Pending",
    to: "06-00-AM",
    status: "11",
    direction: "Radha",

},
{
    name: "Billing work sheet by billing group",
    date: "Pending",
    from: "Pending",
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Expenses by client - All",
    date: "Pending",
    from: "Pending",
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Expenses by client - Open",
    date: "Pending",
    from: "Pending",
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Expenses by staff - Open",
    date: "Pending",
    from: "Pending",
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},


]

export default function Expense(props) {
    const [showContainer1, setShowContainer1] = useState(false);

    const handleButtonClick1 = () => {
        setShowContainer1(!showContainer1);
      };

    return (
        <div>
            <Table className="align-items-center  table-flush" responsive >
                <thead className="">
                    <tr className="" style={{ color: "#7dbf57", backgroundColor: "#344d7f" }}>
                        <th scope="col">Report Name</th>
                        <th scope="col">Favorite</th>
                        <th scope="col">User Report</th>

                    </tr>
                </thead>
                {table.map((item, index) => (
                    <tbody  >
                        <tr key={index} className="" style={{
                            color: "var(--text-primary)",
                            backgroundColor: "#e0e0e0"
                        }}>
                            <td onClick={handleButtonClick1}>{item.name}</td>
                            <td scope="row">{item.date}</td>
                            <td scope="row">{item.from}</td>


                        </tr>
                    </tbody>
                ))}
            </Table>

        </div>
    )
}