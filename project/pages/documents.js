import { useEffect, useState } from 'react';
import './styles.css'; // Import your CSS

export default function Documents() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await fetch('/api/documents');
      const data = await response.json();
      setDocuments(data);
    };

    fetchDocuments();
  }, []);

  return (
    <div className="documents">
      <h1>Documents</h1>
      <ul className="document-list">
        {documents.map((doc) => (
          <li key={doc.id} className="document-item">
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              <img src={doc.thumbnail} alt={doc.title} className="thumbnail" />
              <span className="doc-title">{doc.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
