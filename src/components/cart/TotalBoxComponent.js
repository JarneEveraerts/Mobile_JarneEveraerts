import React, { useState, useMemo, useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

export default function TotalBox({ total }) {
  console.log("TotalBox total", total);
  const vatPercentage = 21;
  const [vatLessPrice, setVatLessPrice] = useState(0);
  const [vat, setVat] = useState(0);
  useMemo(() => {
    setVat((total * vatPercentage) / 100);
    setVatLessPrice(total - vat);
  }, [total]);

  useEffect(() => {
    setVat((total * vatPercentage) / 100);
    setVatLessPrice(total - vat);
  }, [total]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>VAT-less Price:</Text>
        <Text style={styles.value}>{vatLessPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>VAT ({vatPercentage}%):</Text>
        <Text style={styles.value}>{vat.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, styles.totalLabel]}>Total:</Text>
        <View style={styles.totalValueContainer}>
          <Image
            style={styles.coinIcon}
            source={require("../../../assets/coin.png")}
          />
          <Text style={styles.totalValue}>{total.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929", // Dark background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#6B0F1A", // Bordeaux accent color
    padding: 12,
    marginTop: 20,
    width: "95%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
  },
  value: {
    fontSize: 14,
    color: "#FFFFFF", // Light text color
  },
  totalLabel: {
    fontWeight: "bold",
    marginTop: 8,
    color: "#FFFFFF", // Light text color
  },
  totalValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalValue: {
    fontSize: 16,
    color: "#00FF00", // Green color
    marginLeft: 4,
  },
  coinIcon: {
    width: 25,
    height: 25,
  },
});
