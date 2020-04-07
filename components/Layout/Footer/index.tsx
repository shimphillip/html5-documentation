const Footer: React.FC = (): JSX.Element => {
  return (
    <footer>
      <p>
        &copy; <time>{new Date().getFullYear()}</time>{' '}
        <a href="https://www.linkedin.com/in/phillipshim/" target="_blank">
          Phillip Shim
        </a>
      </p>
      <style jsx>
        {`
          footer {
            width: 100%;
            text-align: center;
            margin-top: 1rem;
            position: absolute;
            bottom: 0;
          }

          p {
              margin-bottom: 0;
          }

          a {
            text-decoration: none;
            color: orange;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
