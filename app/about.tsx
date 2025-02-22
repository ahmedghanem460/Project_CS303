import { View, Text, StyleSheet, ScrollView } from 'react-native';

const teamMembers = [
  { name: 'الاء سيد صادق سيد', id: '2127411', email: 'alaasayed2003115@gmail.com', github: '' },
  { name: 'يوسف هشام احمد', id: '2227049', email: '', github: 'https://github.com/YousefHishamGit' },
  { name: 'فاطمه الزهراء على', id: '2127241', email: 'fatmaali8053@gmail.com', github: '' },
  { name: 'زياد احمد صبري', id: '2227298', email: 'Ziada9703@gmail.com', github: 'https://github.com/ziad785' },
  { name: 'احمد ايمن', id: '2227295', email: 'ahmedaymanmido307@gmail.com', github: '' },
  { name: 'كريم وحيد', id: '2227295', email: 'karimwaheed263@gmail.com', github: '' },

];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Team members </Text>
      {teamMembers.map((member, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.info}>ID: {member.id}</Text>
          {member.email ? <Text style={styles.info}>📧 {member.email}</Text> : null}
          {member.github ? <Text style={styles.info}>🔗 <Text style={styles.link}>{member.github}</Text></Text> : null}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8f8f8',
  },
  info: {
    color: '#ccc',
    fontSize: 14,
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});
