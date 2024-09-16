# How to use Components

## Button
```javascript

    import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


    <CustomButton 

    getIcon={<FontAwesome5 name="user-alt" size={24} color="black" />}

    title='Button' 
    
    customButtonStyle={{backgroundColor: 'red',}} 
    
    customTextStyle={{color: 'black'}}
    
    />
```

- customButtonStyle - Using this object you can set styling for buttons dynamically

- customTextStyle - Using this object you can set styling for text dynamically

- title - Using this you can set the title of button

- getIcon('PassYourPngHere') - using this you can set PNG

## Input Field


```JavaScript
        const [value, setValue] = useState('')

        <CustomInput

        getData={setVariable} 
        
        customInputStyle={{color: 'gray',}}

        />

```

- customInputStyle - Using this object you can set styling for buttons dynamically

- placehilder - Using this you can set the placeholder text

- getIcon('PassYourPngHere') - using this you can set PNG

- inputMode={'numeric'} - Using this you can get the input in number

## Custom Text

```javascript
    <CustomText
    value='Jai Bhole Baba'
    customTextStyle={{color: 'black'}}
    />
```

- value - Use this to set the value

- customTextStyle - Using this you can set the text style for buttons dynamically

## Custom Card

```javascript
          <CustomCard 
          
          name='Mahadev' 
          about='God' 
          
          customImageStyle={{borderRadius: 10, height: 200, width: 200}} 
          
          />

```

- name - helps to add the title of the card

- about - helps to add the description of the card

- ratings - helps to add the rating in the card

- customImage - helps to add the image

- customCardStyle - helps to add the style of the card dynamically

- customImageStyle - helps to add the style into the image of the card

- customNameStyle - helps to add the style to the title of the card

- customAboutStyle - helps to add the style to the description of the card

- customRatingsStyle - helps to add the style to the rating

## Custom Checkbox

```terminal
    npx expo install expo-checkbox
```

- Before using Checkbox Run this command on terminal (if you are not using Expo CLI ignore it)

```javascript
      const [isCheck, setCheck] = useState()

      <CustomCheckbox 
      
      getStatus={setCheck} 
      
      default={true}
      
      />
```
- getStatus - helps to  get the status from the Checkbox component

- default - sets the default status for the Checkbox

## Custom Dropdown

```javascript
    <CustomDropdown
    
    getData={setRole} 

    data={data} 

    ScrollEnabled={false} 

    customTextStyle={{ color: 'white', }}

    customDropdownTextStyle={{color: 'white'}} 

    customDropdownStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} 
    
    customDropdownAreStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)', elevation: 0, borderColor: 'white', borderWidth: 2, width: 300}} 
        
    />

```

- getData - using this you can get the data selected by user

- data - using this you can set the dropdown list

- ScrollEnabled - using this you can set dropdown list scrollable or static
