import styled from "styled-components";

const SearchBarContainer = styled.div`

position: fixed;
top: 13px;
z-index: 35;
display: flex;
left: calc(27vw);
justify-content: center;

@media(max-width: 630px) {
top: 82px;
left: 0px;
width: 100vw;
}

.search-bar{
  all: unset;
  width: 100%;
  max-width: 563px;
  height: 45px;
  border: hidden;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #C6C6C6;

  z-index: 25px;

}

.search-icon{
  font-size: 25px;
  color: #C6C6C6;
}

`

const InputIconContainer = styled.div`

width: calc(100vw - 350px);
max-width: 563px;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 20;

background: #FFFFFF;
border-radius: 8px;

padding: 0px 14px;

@media(max-width: 630px) {
  width: calc(100vw - 10px);
  max-width: 350px;
  }

`

const UserListContainer = styled.ul`
width: calc(100vw - 350px);
max-width: 563px;
background: #E7E7E7;
border-radius: 8px;

position: absolute;
top: 0px;
z-index:10;

padding: 45px 17px 0px 17px;

@media(max-width: 630px) {

  width: calc(100vw - 10px);
  max-width: 350px
}
`

const UserListItem = styled.li`

display: flex;
align-items: center;

padding: 7px 0px;

img{
  width: 39px;
  height: 39px;
  object-fit: cover;
  border-radius: 100%;
}
h1{
  padding-left: 12px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #515151;
}

`

export {
  SearchBarContainer,
  UserListContainer,
  UserListItem,
  InputIconContainer,
}