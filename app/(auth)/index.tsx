import { Text, View, StyleSheet } from "react-native";

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti
        ipsa qui unde vel beatae, blanditiis, nesciunt voluptatum eum minima
        quibusdam! Possimus sequi veritatis dolores accusamus facilis, expedita
        labore. Dolor a at laborum necessitatibus doloremque, voluptatem non
        nisi aperiam ea tempora cumque? Amet expedita non rem cupiditate? At
        sint reprehenderit nulla labore laborum fugiat nihil? Eligendi ipsa
        odio, repellendus maiores saepe blanditiis earum assumenda quam
        recusandae soluta suscipit veniam perspiciatis totam nam, quas veritatis
        culpa vitae delectus. Architecto consectetur molestias autem porro ut
        tenetur numquam iusto eaque minima quis. Sequi, rerum! Minima maxime
        nostrum doloremque aperiam temporibus numquam hic dolore?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333"
  }
});

export default LoginScreen;
