import React from 'react';
import {useForm} from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import {CircleMarker, MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip} from 'react-leaflet';
import axios from "axios";

const center = [59.939143, 30.315466]
const centerPolygon = [[[59.931398, 30.311149], [59.940577, 30.295765], [59.958592, 30.322042], [59.933358, 30.348869]]]
const colorOptions = {color: 'purple'}

const Form = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = data => {
        axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data);
        alert('Заявка отправлена');
        console.log(data);
    };

    console.log(watch("example"));

    return (<div>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Заполните заявку на обратную связь</h1>
            <div className='input-group mb-3'>
                <input
                    {...register('lastName', {
                        required: true, maxLength: 50, pattern: /[а-яА-Я]+$/i,
                    })}
                    type="text"
                    className='form-control'
                    placeholder='Фамилия'
                />
            </div>
            {errors?.lastName?.type === 'required' && (<p>Поле обязательно для заполнения</p>)}
            {errors?.lastName?.type === 'maxLength' && (<p>Ограничение в 50 символов</p>)}
            {errors?.lastName?.type === 'pattern' && (<p>Поле должно содержать только буквы</p>)}

            <div className='input-group mb-3'>
                <input
                    {...register('firstName', {
                        required: true, maxLength: 50, pattern: /[а-яА-Я]+$/i,
                    })}
                    type="text"
                    className='form-control'
                    placeholder='Имя'
                />
            </div>
            {errors?.firstName?.type === 'required' && (<p>Поле обязательно для заполнения</p>)}
            {errors?.firstName?.type === 'maxLength' && (<p>Ограничение в 50 символов</p>)}
            {errors?.firstName?.type === 'pattern' && (<p>Поле должно содержать только буквы</p>)}

            <div className='input-group mb-3'>
                <input
                    {...register('patronymic', {
                        required: true, maxLength: 50, pattern: /[а-яА-Я]+$/i,
                    })}
                    type="text"
                    className='form-control'
                    placeholder='Отчество'
                />
            </div>
            {errors?.patronymic?.type === 'required' && (<p>Поле обязательно для заполнения</p>)}
            {errors?.patronymic?.type === 'maxLength' && (<p>Ограничение в 50 символов</p>)}
            {errors?.patronymic?.type === 'pattern' && (<p>Поле должно содержать только буквы</p>)}

            <div className='input-group mb-3'>
                <input
                    {...register('email', {
                        required: true, maxLength: 50, pattern: /^[A-Za-z@._-]+$/i,
                    })}
                    type="email"
                    className='form-control'
                    placeholder='Email'
                />
            </div>
            {errors?.email?.type === 'required' && (<p>Поле обязательно для заполнения</p>)}
            {errors?.email?.type === 'maxLength' && (<p>Ограничение в 50 символов</p>)}
            {errors?.email?.type === 'pattern' && (<p>Проверьте электронный адрес</p>)}

            <input className='btn btn-outline-primary' type="submit"/>
            {/* <input className='btn btn-primary' type="submit" /> */}
        </form>

        <br/>

        <MapContainer
            center={center}
            zoom={10}
            style={{
                width: '100vw', height: '500px'
            }}>
            <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=H5vTseitPcG7Cr2kWhFr'
                       attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'></TileLayer>

            <CircleMarker
                center={center}
                pathOptions={{color: 'black'}}
                radius={10}>
            </CircleMarker>

            <Marker position={center}>
                <Popup>
                    Мы находимся тут
                </Popup>
                <Tooltip>
                    При наведении
                </Tooltip>
            </Marker>

            <Polygon
                positions={centerPolygon}
                pathOptions={colorOptions}>
            </Polygon>
        </MapContainer>
    </div>);
}

export default Form