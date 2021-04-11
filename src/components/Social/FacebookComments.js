import { siteUrl } from "../../lib/utils/url.utils";

export default function FacebookComments({ uri }) {
  if (typeof uri === 'undefined') {
    throw new Error('Facebook Comments received undefined uri');
  }

  return (
    <div style={{
      background: 'linear-gradient(#fff, #ccc)',
      border: '1px solid #ccc',
    }}>
      <h3
        style={{
          paddingLeft: '10px',
        }}
      >Comentários</h3>

      <div
        className="fb-comments"
        data-href={`${siteUrl(uri)}`}
        data-width="625"
        data-numposts="7"
      ></div>
    </div>
  );
}
