import useDocumentTitle from '../../hooks/useDocumentTitle.js';
import AboutSection from '../../sections/About/About.jsx';
import CampusBanner from '../../sections/CampusBanner/CampusBanner.jsx';
import PrincipalMessage from '../../sections/PrincipalMessage/PrincipalMessage.jsx';

const DESCRIPTION =
  'In a gurukul, students learned by living close to their teachers, asking questions and working with their hands. We keep that closeness: small classes, mentors who know every child, and a timetable that leaves room to build, perform and play.';

export default function About() {
  useDocumentTitle('About', DESCRIPTION);

  return (
    <>
      <CampusBanner />
      <AboutSection headingAs="h1" />
      <PrincipalMessage />
    </>
  );
}
