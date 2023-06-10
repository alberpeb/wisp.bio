import * as dataJson from '../../data.json'

function Dashboard() {
    //const [name, setName] = useState('');
    //const [socialLinks, setSocialLinks] = useState([]);
    //const [customLinks, setCustomLinks] = useState([]);
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //setName(event.target.value);
    };
  
    const handleSocialLinkChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      //const updatedLinks = [...socialLinks];
      //updatedLinks[index] = event.target.value;
      //setSocialLinks(updatedLinks);
    };
  
    const handleCustomLinkChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      //const updatedLinks = [...customLinks];
      //updatedLinks[index] = event.target.value;
      //setCustomLinks(updatedLinks);
    };
  
    const handleAddSocialLink = () => {
      //setSocialLinks([...socialLinks, '']);
    };
  
    const handleAddCustomLink = () => {
      //setCustomLinks([...customLinks, { text: '', link: '' }]);
    };
  
    const handleDeleteSocialLink = (index: number) => {
      //const updatedLinks = [...socialLinks];
      //updatedLinks.splice(index, 1);
      //setSocialLinks(updatedLinks);
    };
  
    const handleDeleteCustomLink = (index: number) => {
      //const updatedLinks = [...customLinks];
      //updatedLinks.splice(index, 1);
      //setCustomLinks(updatedLinks);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Handle form submission here
    };
  
    return (
      <div>
        <h1>Dashboard</h1>
  
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
  
          <div>
            <h2>Social Networks</h2>
            {dataJson.socials.map((link, index) => (
              <div key={index}>
                <input type="text" value={link} onChange={(event) => handleSocialLinkChange(event, index)} />
                <button type="button" onClick={() => handleDeleteSocialLink(index)}>
                  Delete
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddSocialLink}>
              Add More
            </button>
          </div>
  
          <div>
            <h2>Custom Links</h2>
            {dataJson.links.map((link, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={link.title}
                  onChange={(event) => handleCustomLinkChange(event, index)}
                  placeholder="Link Text"
                />
                <input
                  type="text"
                  value={link.title}
                  onChange={(event) => handleCustomLinkChange(event, index)}
                  placeholder="Link URL"
                />
                <button type="button" onClick={() => handleDeleteCustomLink(index)}>
                  Delete
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddCustomLink}>
              Add More
            </button>
          </div>
  
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }