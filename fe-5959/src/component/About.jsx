import React from "react";
import Container from "react-bootstrap/esm/Container";

function About() {
  return (
    <div className="about-page-wrapper py-5">
      <Container className="text-center title-desc">
        <h2 className="aboutTitle">İlk React Projem</h2>
        <p className="lead mt-5">
          Bu proje, React ve Bootstrap teknolojileriyle geliştirdiğim ilk web
          uygulamamdır. Modern tasarım anlayışıyla, oyun koleksiyonumu ve
          içeriklerimi paylaşmak için özel olarak hazırlandı. Hem öğrenmek hem de
          pratik yapmak amacıyla oluşturduğum bu projede, özelleştirilebilir
          bileşenler ve dinamik sayfa geçişleriyle kullanıcı dostu bir deneyim
          sunmayı hedefledim.
        </p>
        <p className="d-flex justify-content-center mt-5 text-muted">
          Bu projede yapay zeka kullanılmıştır.
        </p>
      </Container>
    </div>
  );
}

export default About;
