import React, { useState } from 'react'; 
import { Document, Page,pdfjs } from 'react-pdf'; 
import Sidebar from './Sidebar';


//PDFjs worker from an external cdn 
const data = 
"./dummy.pdf"

export default function Abc() { 
	
	pdfjs.GlobalWorkerOptions.workerSrc = 
	`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
	const [numPages, setNumPages] = useState(null); 
	const [pageNumber, setPageNumber] = useState(1); 

	function onDocumentLoadSuccess({ numPages }) { 
	setNumPages(numPages); 
	setPageNumber(1); 
} 
return ( 
	<> 
	<div className="main"> 
	<Document 
		file={data} 
		onLoadSuccess={onDocumentLoadSuccess} 
		> 
		<Page pageNumber={pageNumber} /> 
	</Document> 
	</div> 
	<Sidebar />
	</> 
); 
}
