# How to use Components

## Button
```javascript
    <CustomButton 

    title='Button' 
    
    customButtonStyle={{backgroundColor: 'red',}} 
    
    customTextStyle={{color: 'black'}}
    
    />
```

- customButtonStyle - Using this object you can set styling for buttons dynamically

- customTextStyle - Using this object you can set styling for text dynamically

- title - Using this you can set the title of button

## Input Field


```JavaScript
        const [value, setValue] = useState('')

        <CustomInput
        
        onChange={setValue} 
        
        customInputStyle={{color: 'gray',}}

        />

```

- customInputStyle - Using this object you can set styling for buttons dynamically

- placehilder - Using this you can set the placeholder text

## CustomText

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

- customCardStyle - helps to add the style of the card dynamically

- customImageStyle - helps to add the style into the image of the card

- customNameStyle - helps to add the style to the title of the card

- customAboutStyle - helps to add the style to the description of the card

- customImage - helps to add the image