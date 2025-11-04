import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, Button, View } from "react-native";

const API = "http://206.84.168.63:3000"; // or use tunnel, or emulator localhost mapping

export default function App() {
  const [menu, setMenu] = useState([]);
  const [randomItem, setRandomItem] = useState(null);

  const loadMenu = async () => {
    const res = await fetch(`${API}/menu`);
    const json = await res.json();
    setMenu(json.items || []);
  };

  const loadRandom = async () => {
    const res = await fetch(`${API}/menu/random`);
    const json = await res.json();
    setRandomItem(json.item || null);
  };

  useEffect(() => { loadMenu(); }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 12 }}>Coffee Shop Menu</Text>
      <Button title="Get Random In-Stock Item" onPress={loadRandom} />
      {randomItem && (
        <View style={{ marginVertical: 12 }}>
          <Text style={{ fontSize: 16 }}>Random: {randomItem.name} — Rs. {randomItem.price}</Text>
        </View>
      )}
      <FlatList
        data={menu}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text style={{ paddingVertical: 6 }}>
            {item.category} • {item.name} — Rs. {item.price} {item.inStock ? "" : "(Out of Stock)"}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
