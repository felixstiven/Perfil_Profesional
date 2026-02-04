/**
 * 📋 COMPONENTE: LeadForm
 * 
 * Formulario para capturar información de contacto.
 * Aparece como modal sobre el chat.
 */

import { useState } from "react";
import {
    validateName,
    validateCompany,
    validateMessage,
    isValidEmail,
    isValidPhone,
    limitLength
} from "../../utils/security";

export default function LeadForm({ onSubmit, onClose }) {
    //Estado del componente
    const [formData, setFormData] = useState({
        empresa: '',
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Validar empresa con función de seguridad
        const companyValidation = validateCompany(formData.empresa);
        if (!companyValidation.valid) {
            newErrors.empresa = companyValidation.error;
        }

        // Validar nombre con función de seguridad
        const nameValidation = validateName(formData.nombre);
        if (!nameValidation.valid) {
            newErrors.nombre = nameValidation.error;
        }

        // Validar email
        if (!formData.email.trim()) {
            newErrors.email = "Por favor ingresa tu email";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Por favor ingresa un email válido";
        }

        // Validar teléfono (opcional)
        if (formData.telefono && !isValidPhone(formData.telefono)) {
            newErrors.telefono = 'Teléfono debe tener 10 dígitos (solo números)';
        }

        // Validar mensaje con función de seguridad
        const messageValidation = validateMessage(formData.mensaje);
        if (!messageValidation.valid) {
            newErrors.mensaje = messageValidation.error;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Limitar longitud según el campo
        let limitedValue = value;
        if (name === 'empresa') limitedValue = limitLength(value, 100);
        if (name === 'nombre') limitedValue = limitLength(value, 50);
        if (name === 'email') limitedValue = limitLength(value, 254);
        if (name === 'telefono') limitedValue = limitLength(value, 10);
        if (name === 'mensaje') limitedValue = limitLength(value, 1000);

        setFormData({
            ...formData,
            [name]: limitedValue
        });

        //Limpiar error del campo al escribir
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    }

    //Manejar envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        try {
            await onSubmit(formData);
        } catch (error) {
            console.error("Error al enviar formulario: ", error);
            setErrors({
                ...errors,
                submit: 'Error al enviar el formulario. Por favor intenta de nuevo.'
            })
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        /* 
            📋 CONTENEDOR DEL FORMULARIO
            - bg-gray-900: Fondo gris muy oscuro
            - rounded-xl: Bordes redondeados
            - shadow-2xl: Sombra muy grande
            - border-2 border-cyan/30: Borde cyan con 30% opacidad
            - w-full max-w-md: Ancho completo con máximo de 28rem (448px)
            - max-h-[90%]: Altura máxima del 90% del contenedor
            - overflow-y-auto: Scroll vertical si es necesario
        */
        <div className="bg-gray-900 rounded-xl shadow-2xl border-2 border-cyan/30 w-full max-w-md max-h-[90%] overflow-y-auto">
            {/* 
                🎯 HEADER DEL FORMULARIO
                - bg-gradient-to-r from-cyan to-magenta: Gradiente horizontal
                - p-4: Padding de 16px
                - flex justify-between items-center: Flexbox con espacio entre elementos
            */}
            <div className="bg-gradient-to-r from-cyan to-magenta p-4 flex justify-between items-center rounded-t-xl">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    📋 Datos de Contacto
                </h3>
                <button
                    onClick={onClose}
                    className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors duration-200"
                    aria-label="Cerrar formulario"
                    type="button"
                >
                    ✕
                </button>
            </div>

            {/* 
                📝 FORMULARIO
                - p-6: Padding de 24px
                - space-y-4: Espacio vertical de 16px entre campos
            */}
            <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4">

                {/* CAMPO: Empresa */}
                <div>
                    <label htmlFor="empresa" className="block text-white font-semibold mb-2 text-sm">
                        Nombre de la Empresa *
                    </label>
                    <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 text-white rounded-lg px-4 py-3 
                                  border-2 ${errors.empresa ? 'border-red-500' : 'border-cyan/30'} 
                                  focus:border-cyan focus:outline-none transition-colors duration-200
                                  placeholder-gray-500 disabled:opacity-50`}
                        placeholder="Ej: Mi Empresa SAS"
                        disabled={isSubmitting}
                    />
                    {errors.empresa && (
                        <span className="text-red-400 text-xs mt-1 block" role="alert">
                            {errors.empresa}
                        </span>
                    )}
                </div>

                {/* CAMPO: Nombre */}
                <div>
                    <label htmlFor="nombre" className="block text-white font-semibold mb-2 text-sm">
                        Tu Nombre *
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 text-white rounded-lg px-4 py-3 
                                  border-2 ${errors.nombre ? 'border-red-500' : 'border-cyan/30'} 
                                  focus:border-cyan focus:outline-none transition-colors duration-200
                                  placeholder-gray-500 disabled:opacity-50`}
                        placeholder="Ej: Juan Pérez"
                        disabled={isSubmitting}
                    />
                    {errors.nombre && (
                        <span className="text-red-400 text-xs mt-1 block" role="alert">
                            {errors.nombre}
                        </span>
                    )}
                </div>

                {/* CAMPO: Email */}
                <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 text-white rounded-lg px-4 py-3 
                                  border-2 ${errors.email ? 'border-red-500' : 'border-cyan/30'} 
                                  focus:border-cyan focus:outline-none transition-colors duration-200
                                  placeholder-gray-500 disabled:opacity-50`}
                        placeholder="Ej: juan@empresa.com"
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <span className="text-red-400 text-xs mt-1 block" role="alert">
                            {errors.email}
                        </span>
                    )}
                </div>

                {/* CAMPO: Teléfono */}
                <div>
                    <label htmlFor="telefono" className="block text-white font-semibold mb-2 text-sm">
                        Teléfono (Opcional)
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 text-white rounded-lg px-4 py-3 
                                  border-2 ${errors.telefono ? 'border-red-500' : 'border-cyan/30'} 
                                  focus:border-cyan focus:outline-none transition-colors duration-200
                                  placeholder-gray-500 disabled:opacity-50`}
                        placeholder="Ej: 3001234567"
                        disabled={isSubmitting}
                    />
                    {errors.telefono && (
                        <span className="text-red-400 text-xs mt-1 block" role="alert">
                            {errors.telefono}
                        </span>
                    )}
                </div>

                {/* CAMPO: Mensaje */}
                <div>
                    <label htmlFor="mensaje" className="block text-white font-semibold mb-2 text-sm">
                        Mensaje *
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows="3"
                        className={`w-full bg-gray-800 text-white rounded-lg px-4 py-3 
                                  border-2 ${errors.mensaje ? 'border-red-500' : 'border-cyan/30'} 
                                  focus:border-cyan focus:outline-none transition-colors duration-200
                                  placeholder-gray-500 disabled:opacity-50 resize-none`}
                        placeholder="Cuéntanos brevemente qué necesitas..."
                        disabled={isSubmitting}
                    />
                    {errors.mensaje && (
                        <span className="text-red-400 text-xs mt-1 block" role="alert">
                            {errors.mensaje}
                        </span>
                    )}
                </div>

                {/* ERROR GENERAL */}
                {errors.submit && (
                    <div className="bg-red-500/20 border-l-4 border-red-500 text-red-200 p-3 rounded" role="alert">
                        {errors.submit}
                    </div>
                )}

                {/* 
                    🔘 BOTONES
                    - flex gap-3: Flexbox horizontal con espacio de 12px
                    - mt-6: Margen superior de 24px
                */}
                <div className="flex gap-3 mt-6">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isSubmitting}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold 
                                 rounded-lg px-6 py-3 transition-colors duration-200
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-cyan to-magenta text-white font-semibold 
                                 rounded-lg px-6 py-3 hover:scale-105 active:scale-95 
                                 transition-transform duration-200 shadow-lg hover:shadow-cyan/50
                                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
            </form>
        </div>
    )
}