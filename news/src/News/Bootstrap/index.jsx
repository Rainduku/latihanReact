import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Bootstrap = () => {
  const [searchQuery, setSearchQuery] = useState("apple");  // Query pencarian
  const [newsData, setNewsData] = useState([]);  // Data berita yang akan ditampilkan
  const [loading, setLoading] = useState(false);  // Status loading
  const [error, setError] = useState(null);  // Pesan error jika ada

  // Method untuk mengambil data berita dari NewsAPI
  const fetchData = async () => {
    setLoading(true);

    const apiKey = "d0df91bd323046cbb3c60ffdd75d0143";  // Ganti dengan API Key NewsAPI-mu
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2025-01-09&to=2025-01-09&sortBy=popularity&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setNewsData(response.data.articles);  // Ambil artikel dari response
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Memanggil fetchData saat komponen pertama kali dimuat
  useEffect(() => {
    fetchData();
  }, []);  // Kosongkan array dependensi agar hanya dipanggil sekali saat pertama kali dimuat

  // Method untuk menangani perubahan input pencarian
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Method untuk menangani pengiriman pencarian
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData();  // Panggil fetchData saat form disubmit
  };

  return (
    <Container fluid>
      <Row className="bg-dark text-white">
        <Col>
          <h2>Radar Hot News</h2>
        </Col>
      </Row>

      {/* Form Pencarian */}
      <Form onSubmit={handleSearchSubmit}>
        <InputGroup className="mt-4">
          <InputGroup.Text id="basic-addon1">SRC</InputGroup.Text>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={searchQuery}
            onChange={handleSearchChange}
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
};

export default Bootstrap;
