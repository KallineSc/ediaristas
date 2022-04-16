import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/imputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@mui/material';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const { cep, setCep } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja os profissionais da sua localidade'
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {cep}
          <Typography color={'error'}>CEP inválido</Typography>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              // picture={'https://github.com/KallineSc.png'}
              picture={''}
              name={'Kalline Silva'}
              rating={5}
              description={'Ceará'}
            />
            <UserInformation
              // picture={'https://github.com/KallineSc.png'}
              picture={''}
              name={'Kalline Silva'}
              rating={5}
              description={'Ceará'}
            />
            <UserInformation
              // picture={'https://github.com/KallineSc.png'}
              picture={''}
              name={'Kalline Silva'}
              rating={5}
              description={'Ceará'}
            />
            <UserInformation
              // picture={'https://github.com/KallineSc.png'}
              picture={''}
              name={'Kalline Silva'}
              rating={5}
              description={'Ceará'}
            />
            <UserInformation
              // picture={'https://github.com/KallineSc.png'}
              picture={''}
              name={'Kalline Silva'}
              rating={5}
              description={'Ceará'}
            />
            <UserInformation
              // picture={'https://github.com/KallineSc.png'}
              picture={''}
              name={'Kalline Silva'}
              rating={5}
              description={'Ceará'}
            />
            <UserInformation
              // picture={'https://github.com/KallineSc.png'}
              picture={''}
              name={'Kalline Silva'}
              rating={5}
              description={'Ceará'}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
