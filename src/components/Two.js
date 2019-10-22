import React, {Component} from 'react'
import styled from 'styled-components'
import { ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT } from '../constants';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import next from '../img/next.png'
import prev from '../img/prev.png'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
const classes = withStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: 20,
    },
  });

const BlueRadio = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);

class Two extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        course: '',
        programm: '',
        english: '',
        interes: '',
        mail: '',
        mailAdress: '',
        questionView: '',
    }
  }

    handleChange = (question, event) => {
      this.setState({[question]: event.target.value});
    }
  
    render(){
        const { questionView, name, course, programm, english, interes, mail, mailAdress } = this.state
    return (
      <Wrap>
        {questionView === ONE ?
        <WrapFlex>
            <Title>Как тебя зовут?</Title>
            <TextFieldWrap noValidate autoComplete="off">
                <InputCustom
                    value={this.state.name}
                    onChange={e => this.handleChange('name', e)}
                />
            </TextFieldWrap>
            <WrapButtons>
                <Button alt='' src={prev} onClick={() => this.setState({questionView: ''})}/>  
                <Button alt='' src={next} onClick={() => {
                    this.setState({questionView: TWO})
                }}/>  
            </WrapButtons>
        </WrapFlex> : 

        questionView === TWO ? 
        <WrapFlex>
            <Title>Отлично, {name}, на каком курсе ты учишься?</Title>
            <WrapPanels>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === '1'}
                onChange={(e) => this.handleChange('course', e)}
                value="1"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === '1'}
                onChange={(e) => this.handleChange('course', e)}
                value="1"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === '2'}
                onChange={(e) => this.handleChange('course', e)}
                value="2"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>3 или 4</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === '3 или 4'}
                onChange={(e) => this.handleChange('course', e)}
                value="3 или 4"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>М1 или М2 или
Уже выпустился</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
    </WrapPanels>
            <WrapButtons>
                <Button alt='' src={prev} onClick={() => this.setState({questionView: ONE})}/>  
                <Button alt='' src={next} onClick={() => {
                    this.setState({questionView: THREE})
                }}/>  
            </WrapButtons>
        </WrapFlex> : 
        questionView === THREE ? 
        <WrapFlex>
            <Title>О какой из наших программ ты хочешь узнать больше</Title>
            <WrapPanels>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Intel Delta Course'}
                onChange={(e) => this.handleChange('course', e)}
                value="Intel Delta Course"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Intel Delta Course</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Летняя Интернатура Intel'}
                onChange={(e) => this.handleChange('course', e)}
                value="Летняя Интернатура Intel"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Летняя Интернатура Intel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Долгосрочная стажировка'}
                onChange={(e) => this.handleChange('course', e)}
                value="Долгосрочная стажировка"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Долгосрочная стажировка</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Работа в Intel'}
                onChange={(e) => this.handleChange('course', e)}
                value="Работа в Intel"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Работа в Intel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Образовательные курсы'}
                onChange={(e) => this.handleChange('course', e)}
                value="Образовательные курсы"
            />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Образовательные курсы</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </WrapPanel>
    </WrapPanels>
            <WrapButtons>
                <Button alt='' src={prev} onClick={() => this.setState({questionView: TWO})}/>  
                <Button alt='' src={next} onClick={() => {
                    this.setState({questionView: FOUR})
                }}/>  
            </WrapButtons>
        </WrapFlex>: 
        questionView === FOUR ?
        <WrapFlex>
            <Title>Отлично, а как у тебя с английским?</Title>
            <WrapPanels>
                    <WrapPanel className={classes.root}>
                    <BlueRadio
                        checked={course === 'Elementary, Pre-Intermediate, Intermediate'}
                        onChange={(e) => this.handleChange('course', e)}
                        value="Elementary, Pre-Intermediate, Intermediate"
                    />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Elementary, Pre-Intermediate, Intermediate</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Upper-Intermediate, Advanced'}
                onChange={(e) => this.handleChange('course', e)}
                value="Upper-Intermediate, Advanced"
            />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Upper-Intermediate, Advanced</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>
        </WrapPanels>
            <WrapButtons>
                <Button alt='' src={prev} onClick={() => this.setState({questionView: THREE})}/>  
                <Button alt='' src={next} onClick={() => {
                    this.setState({questionView: FIVE})
                }}/>  
            </WrapButtons>
        </WrapFlex>
        :
        questionView === FIVE ?
        <WrapFlex>
            <Title>Какое направление тебе интересно?</Title>
            <WrapPanels>
                    <WrapPanel className={classes.root}>
                    <BlueRadio
                        checked={course === 'Компьютерное зрение'}
                        onChange={(e) => this.handleChange('course', e)}
                        value="Компьютерное зрение"
                    />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Компьютерное зрение</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>

                    <WrapPanel className={classes.root}>
                    <BlueRadio
                        checked={course === 'Машинное обучение'}
                        onChange={(e) => this.handleChange('course', e)}
                        value="Машинное обучение"
                    />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Машинное обучение</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>

            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Искусственный интеллект'}
                onChange={(e) => this.handleChange('course', e)}
                value="Искусственный интеллект"
            />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Искусственный интеллект</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Обработка мультимедиа'}
                onChange={(e) => this.handleChange('course', e)}
                value="Обработка мультимедиа"
            />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Обработка мультимедиа</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>
            <WrapPanel className={classes.root}>
            <BlueRadio
                checked={course === 'Параллельное программирование'}
                onChange={(e) => this.handleChange('course', e)}
                value="Параллельное программирование"
            />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Параллельное программирование</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>
        </WrapPanels>
            <WrapButtons>
                <Button alt='' src={prev} onClick={() => this.setState({questionView: FOUR})}/>  
                <Button alt='' src={next} onClick={() => {
                    this.setState({questionView: SIX})
                }}/>  
            </WrapButtons>
        </WrapFlex>
        : questionView === SIX ?
        <WrapFlex>
            <Title>Хочешь получить подробное описание наших проектов на почту?</Title>
            <WrapPanels>
                    <WrapPanel className={classes.root}>
                    <BlueRadio
                        checked={mail === 'Да'}
                        onChange={(e) => this.handleChange('mail', e)}
                        value="Да"
                    />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Да</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>
                    <WrapPanel className={classes.root}>
                    <BlueRadio
                        checked={mail === false}
                        onChange={(e) => this.handleChange('mail', e)}
                        value={false}
                    />
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Нет</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </WrapPanel>
            </WrapPanels>
            {this.state.mail && <TextFieldWrap marginTop='20px' noValidate autoComplete="off">
                <InputCustom
                    value={mailAdress}
                    onChange={e => this.handleChange('mailAdress', e)}
                />
            </TextFieldWrap>}
            <WrapButtons>
                <Button alt='' src={prev} onClick={() => this.setState({questionView: FIVE})}/>  
                <Button alt='' src={next} onClick={() => {
                    this.props.next()
                }}/>  
            </WrapButtons>
        </WrapFlex>
        :
        <WrapFlex>
            <Title>Привет! Добро пожаловать в Intel Russia!
            <br/>
            Ответы на небольшой опрос могут открыть тебе большие возможности!</Title>
            <WrapButtons>
                <Button alt='' src={prev} onClick={() => this.props.prev()}/>  
                <Button alt='' src={next} onClick={() => {
                    this.setState({questionView: ONE})
                }}/>  
            </WrapButtons>
        </WrapFlex>
        }
      </Wrap>
    );
  }
}
export default Two


const WrapPanels = styled.div`
display: flex;
justify-content: center;
    align-items: center;
`
const WrapPanel = styled.div`
    display: flex;
    height: 100%
    
`
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Title = styled.h1`
margin: 0;
margin-bottom: 30px;
text-align: center;
color: #0171c5;
font-size: 40px;
`
const Button = styled.img``

const WrapButtons = styled.div`
display: flex;
align-items: space-between;
position: absolute;
bottom: 5%;
max-width: 100%;
justify-content: space-around;
width: 100%;
`
const WrapFlex = styled.div`
display: flex;
flex-direction: column
width: 100%
`
const TextFieldWrap = styled.form`
margin-top: ${props => props.marginTop};
display: flex;
justify-content: center;
align-items: center;
`
const InputCustom = styled.input`
width: 50%;
height: 90px;
font-size: 40px;
border-radius: 10px;
border: 1px solid #ccc;
padding-left: 15px;
text-align: center;
color: #0071c5;
&:focus{
    border: none;
    outline: #0071c5 auto 6px;
    color: #0071c5;
}
`