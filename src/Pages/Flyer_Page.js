import React, { useEffect, useState } from "react";
import * as services from './../services/services'
import { useDispatch, useSelector } from "react-redux";
import htmlParseHelper from "../Components/helpers/utils/htmlParseHelper";
import { Container, Row, Col } from "react-bootstrap";

function Flyer_Page() {

  const dispatch = useDispatch();
  const { flyerPdf } = useSelector((state) => state.otherReducer);

  const [pdfDetails, setPdfDetails] = useState('');

  useEffect(() => {
    dispatch(services.getFlyerPdf());
  }, []);

  useEffect(() => {
    if (flyerPdf !== "") {
      setPdfDetails(flyerPdf);
    }
  }, [flyerPdf]);

  const handleDownloadPDf = (url) => {
    fetch(url).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'flyer.pdf';
        alink.click();
      })
    })
  }

  return (
    <>
      {pdfDetails !== "" &&
        <>
          <Container fluid class="h-100 d-inline-block">
            <Row style={{ height: "500px" }}>
              {htmlParseHelper(pdfDetails.html_data)}
            </Row>
          </Container>
          <div className="text-center">
            <button type="button" onClick={() => handleDownloadPDf(pdfDetails.url)} className="btn btn-primary">Download</button>
          </div>
        </>
      }
    </>
  );
}

export default Flyer_Page;
