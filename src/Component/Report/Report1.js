import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardBody, Table, Button } from "reactstrap";
import "../Styles/Report.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap"
import { Tab, Tabs } from "react-bootstrap";
import Expense from "../Tabs/Time & Expenses";
import "../Styles/Tabs.css";
import emailjs from 'emailjs-com';
import axios from 'axios';
import { PentahoArtifact } from 'react-pentaho-renderer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from "date-fns"
import Modal from "../Model/Model";
import { useLocation } from "react-router-dom";

import { BsHandThumbsUpFill } from "react-icons/bs";
const table = [{
    name: "BillingWorksheet",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",

},
{
    name: "ActivityCodes",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Billing worksheet by Billibg Group",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Billingworksheet_Improvised",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Daily Slip Amount Chargeable and Non-Chargeable",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Expenses by client - All",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Expenses by client - Open",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Expenses by staff - Open",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},
{
    name: "Open Time Aging Detail",
    date: <BsHandThumbsUpFill color="#344d7f" />,
    from: <BsHandThumbsUpFill color="#344d7f" />,
    to: "06-00-AM",
    status: "11",
    direction: "Radha",
},


]


export default function Report1(props) {

    const location = useLocation();
    //const { Email } = location.state;
    console.log("Email", location.state.Email);
    const Email = location.state.Email;
    console.log("E", Email);

    //const notify = () => toast("!!For the futher details contact this Email:prowesstics@gmail.com ");


    const [showContainers, setShowContainers] = useState({});

    console.log("Show", showContainers);

    const [name, setname] = useState("")

    console.log("Name", name);

    const [ShowModel, setShowModal] = useState(false)



    const [FromDate, setFromDate] = useState(format(new Date("2023-02-01"), 'yyyy-MM-dd'));


    const [ToDate, setToDate] = useState(format(new Date("2023-02-28"), 'yyyy-MM-dd'));

    console.log("DAte", FromDate, ToDate);


    const handleNoClick = () => {
        // Do something when user clicks "No"
        setShowModal(false);
    };


    const handleYesClick = () => {
        fetch("http://localhost:4000/submit2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                choice: "yes",
                fromDate: FromDate, // replace with your fromDate variable
                toDate: ToDate,
                name: name,
                email: Email
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    toast(data.message, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                else if (data.error) {
                    window.alert(data.error);
                }
            }
            )
            .catch(error => {
                console.log(error);

            });

        setShowModal(false);
    };



    const handleNameClick = (name) => {

        const firstName = name
        setname(firstName);
        console.log("Name", firstName);
        setShowContainers({ [firstName]: true });
    };


    // const handleNameClick = (name) => {
    //     const firstName = name.split(' ')[0].toLowerCase();
    //     console.log("Name", firstName);
    //     setShowContainers({ ...showContainers, [firstName]: true });
    // };








    const handleDownloads = () => {
        axios.post('http://localhost:4000/report2', {
            fromDate: FromDate, // replace with your fromDate variable
            toDate: ToDate,
            name: name,
            email: Email
        }, {
            responseType: 'blob'
        }).then(response => {

            const contentType = response.headers['content-type'];

            if (contentType === 'application/pdf') {
                const file = new Blob([response.data], { type: 'application/pdf' });
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL);
                toast('PDf download successfully', {
                    position: toast.POSITION.TOP_CENTER
                });
                //setResponse("");
                //setError("");
            } else {
                console.log(response.data.message);
                // toast('This report have more than 5 pages, so pdf sended in our mail', {
                //     position: toast.POSITION.TOP_CENTER

                // });
                setShowModal(true)
                //setError("");
            }

            console.log("Response", response);



        }).catch(error => {
            console.error(error);
        });
    }


    return (
        <div style={{ backgroundColor: "#e0e0e0", height: "100vh" }}>

            <Card className="p-2">
                <Row>
                    <Col lg={8}>
                        <h5>Report</h5>
                    </Col>
                    <Col lg={4}>

                        <Row>
                            <Col>
                                <button className="btn1" onClick={handleDownloads}>Run Report</button>
                            </Col>
                            <Col>
                                <button className="btn1" onClick={handleDownloads}>Reset Filters </button>
                            </Col>
                            <Col>
                                <button className="btn1">Email Log</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>

            <ToastContainer />

            <Row>
                <Col lg={7}>
                    <Card className="p-2">
                        <Tabs defaultActiveKey="social3">
                            <Tab eventKey="social1" title="Accounting">

                            </Tab>
                            <Tab eventKey="social2" title="Invoicing">

                            </Tab>
                            <Tab eventKey="social3" title="Time & Expenses">
                                {/* <Expense /> */}
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
                                                color: "",
                                                backgroundColor: "#e0e0e0"
                                            }}>
                                                <td onClick={() => handleNameClick(item.name)} >{item.name}</td>
                                                <td scope="row">{item.date}</td>
                                                <td scope="row">{item.from}</td>


                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>

                            </Tab>
                            <Tab eventKey="social4" title="Performance">

                            </Tab>
                            <Tab eventKey="social5" title="Payroll">

                            </Tab>
                        </Tabs>
                    </Card>
                </Col>
                <Col lg={5}>



                    {showContainers.BillingWorksheet && <Card className="p-2">

                        <Row>
                            <Col>
                                <h6>Billing Worksheet Filter</h6>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <h3></h3>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h6>From</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="date" value={FromDate} onChange={e => setFromDate(e.target.value)} placeholder="From" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h6>To</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="date" value={ToDate} onChange={e => setToDate(e.target.value)} placeholder="To" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Clients</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select Clients"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Staffs</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select staffs"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Orginators</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select orginate"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Billing Partner</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select partner"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Client Type</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select client"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                    </Card>
                    }
                    {showContainers.ActivityCodes && <Card className="p-2">

                        <Row>
                            <Col>
                                <h6>Activity Code </h6>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <h3></h3>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h6>From</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="date" value={FromDate} onChange={e => setFromDate(e.target.value)} placeholder="From" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h6>To</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="date" value={ToDate} onChange={e => setToDate(e.target.value)} placeholder="To" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Clients</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select Clients"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Staffs</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select staffs"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Orginators</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select orginate"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Billing Partner</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select partner"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Client Type</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select client"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                    </Card>}
                    {showContainers.Worksheet && <Card className="p-2">

                        <Row>
                            <Col>
                                <h6>Worksheet Filter </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3></h3>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h6>From</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="date" value={FromDate} onChange={e => setFromDate(e.target.value)} placeholder="From" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h6>To</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <input type="date" value={ToDate} onChange={e => setToDate(e.target.value)} placeholder="To" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-2">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Clients</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select Clients"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-2">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Staffs</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select staffs"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-2">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Orginators</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select orginate"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-2">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Billing Partner</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select partner"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                        <Row className="mt-2">

                            <Col>
                                <Row>
                                    <Col>
                                        <h6>Client Type</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col>

                                <Row>
                                    <Col>
                                        <DropdownMultiselect
                                            options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                                            placeholder="Select client"
                                            name="countries"
                                            className="custom-dropdown"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <h3></h3>
                            </Col>
                        </Row>
                    </Card>}
                </Col>
            </Row>


            {/*         
          <button onClick={handleButtonClick}>Show Popup</button> */}

            <Row>
                <Col className="d-flex justify-content-center">

                    {ShowModel && (
                        <Modal
                            message="Can we send this report by email as it takes a long time to process?
                            "
                            onYesClick={handleYesClick}
                            onNoClick={handleNoClick}
                        />
                    )}



                </Col>
            </Row>


        </div>
    )
}