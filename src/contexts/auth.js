import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { format } from "date-fns";

import api from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    // AsyncStorage.removeItem("@authToken")
    // AsyncStorage.removeItem("@user")
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("@authToken");
      const storedUserString = await AsyncStorage.getItem("@user");

      if (storageUser) {
        setUser(JSON.parse(storedUserString));
        //navigation.navigate('Home');
        setLoading(false);

        //navigation.navigate('SignIn');
      }
      setLoading(false);
    }
    setLoading(true);
    loadStorage();
  }, []);

  async function signIn(email, password) {
    setLoadingAuth(true);

    try {
      const response = await api.post("auth/login", {
        email: email,
        password: password,
      });

      const { token } = response.data;
      const user = { email: email };

      await AsyncStorage.setItem("@authToken", token);
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUser(user);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setLoadingAuth(false);
    } catch (err) {
      // console.error("ERRO AO LOGAR ", err);
      Alert.alert("E-mail ou senha incorretos!");
      setLoadingAuth(false);
    }
  }

  async function CadastrarUser(data) {
    setLoadingAuth(true);

    try {
      // Envie os dados para a API
      await api
        .post("/users", data)
        .then((response) => {
          Alert.alert("Usuário cadastrado com sucesso!");
        })
        .catch((e) => {
          Alert.alert("Erro ao cadastrar usuário!");
        });

      navigation.navigate("SignIn");
      setLoadingAuth(false);
    } catch (error) {
      // Lide com erros de envio para a API aqui
      Alert.alert("Erro ao cadastrar usuário!");
      setLoadingAuth(false);
      // console.error("Erro ao enviar dados:", error.message);
    }
  }

  async function LoadOrders() {
    try {
      setLoadingOrders(true);
      const response = await api.get("users");

      setOrders(response.data);
      setFilteredOrders(response.data);
    } catch (error) {
      console.error("Erro ao carregar as ordens:", error);
    } finally {
      setLoadingOrders(false);
    }
  }

  const handleFilterChange = (filterText) => {
    if (filterText === "") {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredOrders(filtered);
    }
  };

  async function deleteOrder(id) {
    try {
      const token = await AsyncStorage.getItem("@authToken");

      const response = await api.delete(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        loadUsers();
        console.log("Usuário deletado com sucesso");
      } else if (response.status === 404) {
        console.error("Usuário não encontrado");
      } else {
        console.error("Erro ao deletar o usuário");
      }
    } catch (error) {
      console.error("Erro ao carregar os usuários:", error);
    }
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
      navigation.navigate("SignIn");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        LoadOrders,
        handleFilterChange,
        loadingOrders,
        filteredOrders,
        setFilteredOrders,
        CadastrarUser,
        deleteOrder,
        signIn,
        signOut,
        loadingAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
