import React, { Component } from "react";
import axios from "axios";  // Import axios
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export default class Bootstrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "apple",        // Query pencarian
      newsData: [],           // Data berita yang akan ditampilkan
      loading: false,         // Status loading
      error: null,            // Pesan error jika ada
    };
  }

  // Method untuk mengambil data berita dari NewsAPI
  fetchData = async () => {
    this.setState({ loading: true });

    const { searchQuery } = this.state;
    const apiKey = "d0df91bd323046cbb3c60ffdd75d0143";  // Ganti dengan API Key NewsAPI-mu
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2025-01-09&to=2025-01-09&sortBy=popularity&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      this.setState({
        newsData: response.data.articles,  // Ambil artikel dari response
        loading: false,
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  // Method untuk menangani perubahan input pencarian
  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  // Method untuk menangani pengiriman pencarian
  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.fetchData();  // Panggil fetchData saat form disubmit
  };

  // Memanggil fetchData saat komponen pertama kali dimuat
  componentDidMount() {
    this.fetchData();  // Memuat berita secara otomatis pada saat pertama kali
  }

  render() {
    const { newsData, loading, error, searchQuery } = this.state;

    return (
      <Container fluid>
        <Row className="bg-dark text-white">
          <Col>
            <h2>Radar Hot News</h2>
          </Col>
        </Row>

        {/* Form Pencarian */}
        <Form onSubmit={this.handleSearchSubmit}>
          <InputGroup className="mt-4">
            <InputGroup.Text id="basic-addon1">SRC</InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              value={searchQuery}
              onChange={this.handleSearchChange}
            />
            <Button type="submit" variant="primary">Search</Button>
          </InputGroup>
        </Form>

        {/* Menampilkan loading spinner jika data sedang diambil */}
        {loading && <div className="mt-4">Loading...</div>}

        {/* Menampilkan error jika terjadi masalah */}
        {error && <div className="mt-4 text-danger">Error: {error}</div>}

        {/* Menampilkan data berita jika sudah ada */}
        <Row xs={1} md={4} className="g-4 mt-5">
          {newsData.length === 0 && !loading && !error && (
            <div>No news found.</div>
          )}
          {newsData.map((news, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={news.urlToImage || "https://via.placeholder.com/100"} />
                <Card.Body>
                  <Card.Title>{news.title}</Card.Title>
                  <Card.Text>
                    {news.description || "This is a longer card with supporting text below as a natural lead-in to additional content."}
                  </Card.Text>
                  <Button variant="primary" href={news.url} target="_blank">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
