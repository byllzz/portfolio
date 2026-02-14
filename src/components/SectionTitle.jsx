export default function SectionTitle({ children, variant = "default" }) {
  const styles = {
    default: "30px",
    large: "60px",
    small: "20px",
  };

  return <h1 className={styles[variant]}>{children}</h1>;
}
