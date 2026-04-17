# 📱 CP2 - Mobile Application Development

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Checkpoint 2** da disciplina de Mobile Application Development.

O aplicativo consiste em um sistema de **cadastro de usuário**, com persistência de dados local, validações e navegação entre telas, utilizando tecnologias modernas do ecossistema React Native.

---

## 🚀 Funcionalidades

* 📋 Cadastro de usuário (Nome, RM, CPF e Telefone)
* 🎭 Máscaras de entrada para CPF e Telefone
* ⚠️ Validação de formulário com regras específicas
* 💾 Persistência de dados com AsyncStorage
* 🔄 Autopreenchimento automático ao abrir o app
* 👤 Tela de perfil com exibição dos dados
* ✏️ Edição de dados com confirmação
* 🗑️ Exclusão de dados com confirmação
* 🎨 Interface estilizada e responsiva

---

## 🧠 Regras de Validação

* Nome: mínimo de 8 caracteres
* RM: exatamente 6 dígitos
* CPF: 11 dígitos (com máscara)
* Telefone: 11 dígitos (com DDD)

---

## 🛠️ Tecnologias Utilizadas

* React Native
* Expo
* Expo Router
* AsyncStorage
* React Native Mask Text

---

## 📁 Estrutura do Projeto

```
app/
 ├── _layout.js   # Configuração de navegação
 ├── index.js     # Tela de Cadastro
 ├── perfil.js    # Tela de Perfil

assets/
 ├── foto.png     # Foto do usuário
```

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/cp2-mobile.git
```

2. Acesse a pasta do projeto:

```
cd cp2-mobile
```

3. Instale as dependências:

```
npm install
```

4. Execute o projeto:

```
npx expo start
```

---

## 📱 Testes Importantes

Para validar o funcionamento completo:

1. Preencher o formulário e salvar
2. Verificar navegação para tela de perfil
3. Testar botão de edição
4. Testar exclusão de dados
5. Fechar e reabrir o app (persistência)

---

## 🎯 Objetivo Acadêmico

Este projeto tem como objetivo aplicar conceitos de:

* Navegação em aplicativos mobile
* Manipulação de estado com Hooks
* Persistência de dados local
* Validação de formulários
* Boas práticas de UI/UX

---

## 👨‍💻 Autor

Desenvolvido por **Ryan Vetoriano**

---

## 📌 Observações

Este projeto foi desenvolvido para fins acadêmicos, mas também pode ser utilizado como base para aplicações reais com React Native.
