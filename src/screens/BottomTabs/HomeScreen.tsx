import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {BORDER_RADIUS, COLORS, FONT, SPACING} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

const ProductScreen = () => {
  const [searchDish, setSearchDish] = useState('');
  const [showList, setShowList] = useState(true);
  const [filteredData, setFilteredData] = useState();

  const {data, isLoading, isError} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorBox}>
        <Text style={styles.errorText}>Something went wrong!</Text>
      </View>
    );
  }

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image source={{uri: item.image}} style={styles.productImage} />

        <View style={styles.infoContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.price}>₹ {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleInputChange = (text: string) => {
    console.log({searchText : text});
    
    setSearchDish(text);

    const filtered = data.filter((data : any) =>
      data.title.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  // console.log({filteredData});
  console.log({showList});
  
  
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: SPACING.md,
          paddingHorizontal: SPACING.md,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.screenTitle}>Products</Text>
        <Ionicons
          name="search-outline"
          size={29}
          color={COLORS.goldGradientPrimary}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Search Products"
        onFocus={() => setShowList(false)}
        value={searchDish}
        onChangeText={handleInputChange}
        placeholderTextColor={'#0F0F0FFF'}
      />

      {showList && <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      />}

      {!showList && (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 15,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: BORDER_RADIUS.md,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  input: {
    padding: SPACING.md,
    // marginTop: SPACING.lg,
    marginBottom: SPACING.lg,
    color: COLORS.text,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: '#E2E2E2FF',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B7F79',
  },
});
