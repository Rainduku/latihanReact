import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default class Bootstrap extends React.Component {
    render() {
        return(
            <Container fluid="md">
                 <Card className="mt-4" border="dark">
                    <Row className="no-gutters">
                        <Col md={4}>
                            <Card.Img src="https://img.antaranews.com/cache/1200x800/2024/12/30/1000293996_1.jpg.webp" 
                            alt="Card image" style={{height: '200px', width: '18rem'}} 
                            thumbnail className=""/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Api sijago Merah</Card.Title>
                                <Card.Text>
                                    Telah terjadi kebakaran yang terletak didusun sukahutan....
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Diposting 19 menit lalu</small>
                                </Card.Text>
                                    <Button variant="primary">Lanjutkan Membaca</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="mt-4" border="dark">
                    <Row className="no-gutters">
                        <Col md={4}>
                            <Card.Img src="https://tse4.mm.bing.net/th?id=OIP.OBHTbJtBE9E6MGfLz3xcEAHaEK&pid=Api&P=0&h=180" 
                            alt="Card image" style={{height: '200px', width: '18rem'}} 
                            thumbnail className=""/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Demo Kenaikan PPN yang berujung Ricuh</Card.Title>
                                <Card.Text>
                                    Unjuk rasa yang dilakukan didepan kantor DPR pusat berujung ricuh....
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Diposting 29 menit lalu</small>
                                </Card.Text>
                                    <Button variant="primary">Lanjutkan Membaca</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="mt-4" border="dark">
                    <Row className="no-gutters">
                        <Col md={4}>
                            <Card.Img src="https://tse4.mm.bing.net/th?id=OIP._V9ZRpZqPmKjz5rVTylgKQHaFL&pid=Api&P=0&h=180" 
                            alt="Card image" style={{height: '200px', width: '18rem'}} 
                            thumbnail className=""/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Lelucon Para Pemimpin</Card.Title>
                                <Card.Text>
                                    Kasus korupsi 300T, dihukum dengan sangat ringan sekali....
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Diposting 34 menit lalu</small>
                                </Card.Text>
                                    <Button variant="primary">Lanjutkan Membaca</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="mt-4" border="dark">
                    <Row className="no-gutters">
                        <Col md={4}>
                            <Card.Img src="https://tse1.mm.bing.net/th?id=OIP.l6Tu_38x_d9VmBk_eVGTTgHaEK&pid=Api&P=0&h=180" 
                            alt="Card image" style={{height: '200px', width: '18rem'}} 
                            thumbnail className=""/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Agus Kembali Berulah</Card.Title>
                                <Card.Text>
                                    Berbagai macam agus yang telah membuat heboh jagat dunia maya....
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Diposting 37 menit lalu</small>
                                </Card.Text>
                                    <Button variant="primary">Lanjutkan Membaca</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className="mt-4" border="dark">
                    <Row className="no-gutters">
                        <Col md={4}>
                            <Card.Img src="https://tse3.mm.bing.net/th?id=OIP.Gfly1EF81feXOyYsaHFC7wHaE8&pid=Api&P=0&h=180" 
                            alt="Card image" style={{height: '200px', width: '18rem'}} 
                            thumbnail className=""/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Pesona Pantai Dijawa</Card.Title>
                                <Card.Text>
                                    Destinasi wisata akhir tahun ramai dikunjungi para wisatawan....
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Diposting 45 menit lalu</small>
                                </Card.Text>
                                    <Button variant="primary">Lanjutkan Membaca</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    }
}