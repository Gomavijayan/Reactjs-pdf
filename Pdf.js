import React, { useState } from 'react'; 
import { Document, Page,pdfjs } from 'react-pdf'; 
import Sidebar from './Sidebar';
//import './dummy.pdf';
	
pdfjs.GlobalWorkerOptions.workerSrc = 
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const data = "sample.pdf"

function Pdf() { 
 
const [numPages, setNumPages] = useState(null) 
const [pageNumber, setPageNumber] = useState(1) 

document.addEventListener("contextmenu", (event) => { 
	event.preventDefault(); 
}); 
	
function onDocumentLoadSuccess({ numPages }) { 
	setNumPages(numPages); 
	setPageNumber(1); 
} 

function changePage(offset) { 
	setPageNumber(prevPageNumber => prevPageNumber + offset); 
} 

function previousPage() { 
	changePage(-1); 
} 

function nextPage() { 
	changePage(1); 
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
	<div> 
		<div className="pagec"> 
		Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} 
		</div> 
		<div className="buttonc"> 
		<button 
		type="button"
		disabled={pageNumber <= 1} 
		onClick={previousPage} 
		className="Pre"	
		> 
		Previous 
		</button> 
		<button 
		type="button"
		disabled={pageNumber >= numPages} 
		onClick={nextPage} 
		
		> 
		Next 
		</button> 
		</div> 
	</div> 
	</div>
	<Sidebar /> 
	</> 
); 
}

export default Pdf;