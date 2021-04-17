import PageCommon from '../PageCommon/PageCommon'
import FacebookComments from '../Social/FacebookComments';
import CareerStats from './CareerStats';
import styles from './PageCareer.module.scss'

export default function PageCareer({
  title,
  isHighlight,
  bgImageUrl,
  profession,
  commentsUri,
  children,
}) {
  const banner = (
    <div className={styles.header}>
      <div
        className={styles.bgImage}
        style={{
          backgroundImage: `url('${bgImageUrl}')`
        }}
      ></div>
      <div className={styles.bgOverlay}>
        <SvgBgOverlay />
      </div>
      <div className={styles.headerContent}>
        <div className={styles.bgHeaderContent}>
          <SvgBgContent />
        </div>
        <div className={styles.headerContentInner}>
          <div className={styles.title}>
            {title}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <PageCommon
      banner={banner}
    >
      <div className={styles.container}>
        <h2 className={styles.h2Title}>Estatísticas da Profissão</h2>

        <CareerStats stats={profession.stats} />

        <div className={styles.pageCareerContent}>
          { children }
        </div>

        {!!commentsUri && <FacebookComments uri={commentsUri} />}
      </div>
    </PageCommon>
  )
}

// https://yqnn.github.io/svg-path-editor/

function SvgBgContent() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-6.4 0 6.5 7"
      width={300}
      height={280}
    >
      <path d="m 0 0 c 1 2 1 4 -2 7 l -6 0 c 0 -3 0 -4 0 -7 m 7 1" fill="rgba(0,0,0,.8)"/>
    </svg>
  );
}

function SvgBgOverlay() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 0 6.5 7"
      height={280}
    >
      <path d="m 0 0 c 1 2 1 4 -2 7 l 6 0 c 1 -4 0 -6 -2 -7" fill="rgba(255,255,255,.4)"/>
    </svg>
  );
}
