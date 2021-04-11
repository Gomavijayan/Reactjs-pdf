import React from 'react';
import DownloadLink from "react-download-link";
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

const MyDoc = () => (
    <Document>
      <Page>
        // My document data
      </Page>
    </Document>
  )

function Sidebar() {
    return (
        //img src={logo} alt="Logo" 
        <DownloadLink
        label="download"
        filename="myfile.pdf"
        exportFile={() => Promise.resolve("My cached data...helloworld!!!")}
    />
    )
}

export default Sidebar
